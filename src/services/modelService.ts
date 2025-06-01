import * as tf from '@tensorflow/tfjs';

export async function trainModel(images: number[][], labels: number[]) {
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [images[0].length], units: 16, activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));
  model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

  const xs = tf.tensor2d(images);
  const ys = tf.tensor1d(labels);

  await model.fit(xs, ys, { epochs: 20 });
  return model;
}

export async function predict(model: tf.Sequential, inputs: number[][]) {
  const xs = tf.tensor2d(inputs);
  return model.predict(xs) as tf.Tensor;
}
