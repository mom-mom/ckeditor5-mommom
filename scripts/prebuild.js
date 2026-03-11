const { execSync } = require('child_process');

try {
  const isCI = process.env.CI === 'true';

  if (isCI) {
    console.log('CI environment detected. Skipping version bump.');
  } else {
    const diffOutput = execSync('git diff package.json', { encoding: 'utf-8' });
    const versionChanged = diffOutput.includes('"version"');

    if (versionChanged) {
      console.log('Version already updated in uncommitted changes. Skipping version bump.');
    } else {
      console.log('No version changes detected. Bumping patch version...');
      execSync('npm version patch --no-git-tag-version', { stdio: 'inherit' });
    }
  }
} catch (error) {
  console.error('Prebuild script failed:', error.message);
  process.exit(1);
}
