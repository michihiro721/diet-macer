set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate

echo "Running tailwindcss build"
ls -l ./app/assets/stylesheets/application.tailwind.css
yarn run tailwindcss -i ./app/assets/stylesheets/application.tailwind.css -o ./app/assets/builds/application.css --minify