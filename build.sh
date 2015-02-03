# Скрипт для сборки сайта в конкретную директорию

npm i
./node_modules/.bin/bower-npm-install

# собранный сайт
OUTPUT_DIR=output

# пересобрать
./node_modules/.bin/enb make clean
YENV=production ./node_modules/.bin/enb make

# удалить старую сборку
rm -rf $OUTPUT_DIR
mkdir $OUTPUT_DIR

# деплой
cp desktop.bundles/index/index.html $OUTPUT_DIR/
cp desktop.bundles/index/_index.css $OUTPUT_DIR/
cp desktop.bundles/index/_index.js $OUTPUT_DIR/
cp -r desktop.bundles/index/i $OUTPUT_DIR/
cp favicon.ico $OUTPUT_DIR/

touch $OUTPUT_DIR/.nojekyll
