#!/bin/bash
set -e

GITHUB_REPO=$1
DOCKER_REPO=$2


if [ -z "$GITHUB_REPO" ] || [ -z "$DOCKER_REPO" ]; then
  echo "Błąd: Musisz podać repozytorium GitHub i Docker Hub."
  echo "Użycie: ./builder.sh <user/repo_git> <user/repo_docker>"
  exit 1
fi

echo "Klonowanie https://github.com/$GITHUB_REPO..."
git clone https://github.com/$GITHUB_REPO temp-repo

cd temp-repo
echo "Budowanie obrazu Dockera: $DOCKER_REPO..."
docker build -t $DOCKER_REPO .

echo "Wysyłanie obrazu do Docker Hub..."
docker push $DOCKER_REPO

cd ..
rm -rf temp-repo
echo "Gotowe!"