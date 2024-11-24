FAN_MAKEサーバー<br>
Conoha Wing(以下Wing)のプランに契約する。<br>
Wingのコントロールパネルにログインします。<br>
Wingのターミナルにアクセスするために、SSH接続をする準備を行います。<br>
SSH KEY追加で自動生成を選択します。秘密鍵をダウンロードします<br>
.sshのフォルダを作成します。.ssh下にダウンロードした秘密鍵を配置します。<br>
.sshの同じディレクトリからコマンドプロンプトを開きます。<br>
ssh <IPアドレス> -l <ユーザ名> -p <ポート番号> -i <秘密鍵のパス><br>
![![](image.png)](image.png)<br>
ログイン成功です。<br>
composerのセットアップ<br>
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"<br>
php composer-setup.php<br>
php -r "unlink('composer-setup.php');"<br>
mkdir bin<br>
mv composer.phar bin/composer<br>
composer -Vでバージョンを確認できます。<br>
$ wget git.io/nodebrew<br>
$ perl nodebrew setup<br>
ln -s $HOME/laravel-project/example-laravel-github/public $HOME/public_html/xxx.conohawing.com/laravel<br>
git clone https://github.com/bontenh/FanMake.git<br>
composer install<br>
cp .env.example .env<br>
php artisan key:generate<br>
npm install<br>
