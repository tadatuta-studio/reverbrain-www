OUTPUT_DIR=output

YENV=production ./node_modules/.bin/bem make
mkdir -p $OUTPUT_DIR
mkdir -p $OUTPUT_DIR/i
cp desktop.bundles/index/index.html $OUTPUT_DIR/
cp desktop.bundles/index/_index.css $OUTPUT_DIR/
cp desktop.bundles/index/_index.js $OUTPUT_DIR/
cp -r i/* $OUTPUT_DIR/i/
cp favicon.ico $OUTPUT_DIR/
touch $OUTPUT_DIR/.nojekyll
# echo "reverbrain.com" >> $OUTPUT_DIR/CNAME
