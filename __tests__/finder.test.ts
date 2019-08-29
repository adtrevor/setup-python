import io = require('@actions/io');
import exec = require('@actions/exec');
import fs = require('fs');
import path = require('path');

const toolDir = path.join(
  __dirname,
  'runner',
  path.join(
    Math.random()
      .toString(36)
      .substring(7)
  ),
  'tools'
);
const tempDir = path.join(
  __dirname,
  'runner',
  path.join(
    Math.random()
      .toString(36)
      .substring(7)
  ),
  'temp'
);

process.env['RUNNER_TOOL_CACHE'] = toolDir;
process.env['RUNNER_TEMP'] = tempDir;

import * as finder from '../src/find-python';

describe('Finder tests', () => {
  it('Finds PyPy if it is installed', async () => {
    await exec.exec('python', ['--version']);
  });
});
