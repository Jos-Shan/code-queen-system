# code-queen-system

## Deploy to heroku
`git push heroku main`

## Check logs
`heroku logs --tail``

## App url
https://thawing-lake-35642.herokuapp.com/


const store = new MongoDBSession ({
    uri : process.env.DB_PATH,
    collection : 'mySessions'
})