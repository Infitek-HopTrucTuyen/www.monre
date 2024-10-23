###### clone
```command
cd /var
git clone https://github.com/Infitek-HopTrucTuyen/www.monre.git www.monre
```

###### pull update
```command
cd /var/www.monre
git pull
```

#### www.nginx
```command
cp /var/www.monre/nginx/conf.d/monre.vndev.click.conf /etc/nginx/conf.d/
```

###### create ssl R3 on ubuntu nginx
```command
sudo apt install nginx certbot python3-certbot-nginx -y
sudo certbot --nginx -d monre.vndev.click
```

###### pull update
```command
cd /var/www.monre
git pull
```