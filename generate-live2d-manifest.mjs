import {readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';

const live2dRoot = path.resolve('assets/live2d');
const modelRoot = path.join(live2dRoot, 'model');
const manifestPath = path.join(live2dRoot, 'model_list.json');

function displayName(directoryName) {
  const names = {
    aran: '嘉然',
    diana: '嘉然 Diana · 原创服饰',
  };
  return names[directoryName] ?? directoryName;
}

const entries = await readdir(modelRoot, {withFileTypes: true});
const models = [];

for (const entry of entries) {
  if (!entry.isDirectory()) continue;
  const modelDirectory = path.join(modelRoot, entry.name);
  const files = await readdir(modelDirectory, {withFileTypes: true});
  const modelFile = files.find(
    (file) => file.isFile() && (file.name.endsWith('.model3.json') || file.name.endsWith('.model.json')),
  );
  if (!modelFile) continue;

  const modelPath = path.join(modelDirectory, modelFile.name);
  const model = JSON.parse(await readFile(modelPath, 'utf8'));
  const references = model.FileReferences ?? {};
  const mocName = references.Moc;
  if (!mocName) continue;

  const mocPath = path.join(modelDirectory, mocName);
  const moc = await readFile(mocPath);
  if (moc.subarray(0, 4).toString('ascii') !== 'MOC3') continue;

  const textureNames = Array.isArray(references.Textures) ? references.Textures : [];
  const physicsNames = [references.Physics, references.PhysicsV2?.File].filter(Boolean);
  const requiredFiles = [mocName, ...textureNames, ...physicsNames];
  const complete = requiredFiles.every((fileName) => files.some((file) => file.isFile() && file.name === fileName));
  if (!complete) continue;

  models.push({
    id: entry.name,
    name: displayName(entry.name),
    mocVersion: moc[4],
  });
}

models.sort((left, right) => right.mocVersion - left.mocVersion || left.name.localeCompare(right.name));
const modelList = {
  models: [models.map((model) => model.id)],
  messages: [models.map((model) => `欢迎使用${model.name}`)],
  names: [models.map((model) => model.name)],
};
await writeFile(manifestPath, `${JSON.stringify(modelList, null, 2)}\n`, 'utf8');
console.log(`Live2D manifest: ${models.length} model(s)`);
