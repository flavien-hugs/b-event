require "rubygems"
require "tmpdir"
require "bundler/setup"
require "jekyll"
require "time"

# nom du dépôt github
GITHUB_REPONAME = "flavien-hugs/flavien-hugs.github.io"

CONFIG = {
    'version' => "0.0.1",
    'layouts' => File.join(GITHUB_REPONAME, "_layouts"),
    'posts' => File.join(GITHUB_REPONAME, "_posts"),
    'post_ext' => "md"
}

desc 'Prévisualisation du site avec jekyll'
task :preview do
    sh "bundle exec jekyll serve --watch --baseurl '' --config _config.yml"
end

desc "Recherche le site et imprime des avertissements d'obsolescence spécifiques"
task :check do
    sh "jekyll doctor"
end

desc "Publication des fichiers sur Github"
task :publish do
    system "git add ."
    message = "Mise à jour du site le #{Time.now.utc}"
    system "git commit -m #{message.inspect}"
    system "git push --force"
end

