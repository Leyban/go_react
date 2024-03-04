#! /bin/bash
while true; do

inotifywait -e modify,create,delete -r ./src && \
bun run build && \
cd dist && mv ./pages/* . && rmdir pages && \
cd ..

done
