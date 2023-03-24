#!/bin/bash

# create public subfolder if it doesn't exist
if [ ! -d "public" ]; then
  mkdir public
fi

# download the file and save it to the public subfolder
curl -o public/badges.json https://www.credly.com/users/joeri-abbo/badges.json
