set -o errexit

bundle install
bundle exec rails assets:precompile
bundle exec rails assets:clean
bundle exec rails db:migrate

echo "Running tailwindcss build"
ls -l ./app/assets/stylesheets/application.tailwind.css
yarn run build:css