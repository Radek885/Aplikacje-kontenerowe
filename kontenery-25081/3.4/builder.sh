#!/bin/bash
set -e

GITHUB_REPO=$1
DOCKER_REPO=$2

if [ -z "$GITHUB_REPO" ] || [ -z "$DOCKER_REPO" ]; then
  echo "Użycie: docker run ... builder <user/repo_git> <user/repo_docker>"
  exit 1
fi

echo "$DOCKER_PWD" | docker login -u "$DOCKER_USER" --password-stdin

echo "Klonowanie https://github.com/$GITHUB_REPO..."
git clone https://github.com/$GITHUB_REPO temp-repo

cd temp-repo
docker build -t $DOCKER_REPO .
docker push $DOCKER_REPO

cd ..
rm -rf temp-repo
echo "Sukces!"