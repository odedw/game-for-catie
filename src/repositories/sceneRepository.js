import Scene from '../objects/Scene';
import Repository from './Repository';

class SceneRepository extends Repository {
  constructor() {
    super([
      new Scene('swings1', [{x: 9.07, y:52.91}, {x: 17.51, y:56.25}, {x: 34.70, y:60.13}, {x: 54.08, y:65.13}, {x: 68.46, y:70.68}, {x: 77.21, y:51.25}, {x: 66.90, y:51.80}, {x: 13.13, y:82.90}, {x: 85.65, y:79.01}, {x: 66.90, y:21.27}, {x: 52.20, y:24.04}]),
      new Scene('swings2', [{x: 54.39, y:78.46}, {x: 49.39, y:65.69}, {x: 37.51, y:65.69}, {x: 66.90, y:59.58}, {x: 86.90, y:59.02}, {x: 14.38, y:69.02}, {x: 7.50, y:55.69}, {x: 42.20, y:36.81}]),
      new Scene('rothschild', [{x: 10.00, y:72.38}, {x: 27.20, y:75.71}, {x: 7.81, y:49.03}, {x: 60.33, y:70.15}, {x: 39.70, y:56.81}, {x: 81.90, y:30.68}, {x: 58.46, y:47.36}, {x: 87.21, y:29.57}, {x: 25.95, y:40.13}, {x: 20.01, y:30.13}, {x: 86.90, y:69.60}]),
      new Scene('habima', [{x: 72.84, y:67.35}, {x: 6.88, y:81.24}, {x: 16.88, y:32.92}, {x: 2.81, y:54.58}, {x: 10.00, y:54.03}, {x: 44.39, y:67.91}, {x: 83.78, y:85.13}, {x: 43.45, y:40.70}, {x: 84.09, y:30.15}]),
      new Scene('fountain', [{x: 6.88, y:56.25}, {x: 50.33, y:37.91}, {x: 86.28, y:56.81}, {x: 79.71, y:82.37}, {x: 86.90, y:18.46}, {x: 65.02, y:54.03}, {x: 28.76, y:55.14}, {x: 29.07, y:17.91}, {x: 53.77, y:16.80}]),
      new Scene('sefer', [{x: 22.51, y:53.86}, {x: 57.52, y:53.86}, {x: 86.90, y:48.25}, {x: 70.96, y:75.86}, {x: 47.51, y:23.91}, {x: 37.82, y:54.80}, {x: 30.63, y:44.50}, {x: 55.64, y:42.16}]),
      new Scene('gan', [{x: 65.65, y:80.72}, {x: 52.83, y:66.26}, {x: 17.82, y:24.01}, {x: 54.39, y:23.45}, {x: 4.69, y:69.60}, {x: 28.13, y:75.71}, {x: 39.39, y:66.82}, {x: 19.69, y:11.22}]),
    ]);
  }
}

export default new SceneRepository();
