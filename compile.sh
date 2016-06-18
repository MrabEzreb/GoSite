#!/bin/bash
FILES=/home/mkezreb/GoSite/deps/css/*.scss
for f in $FILES
do
	echo "Processing File $f"
	sass $f "${f%.scss}.css"
done
