# NLP-tool
(News Article Evaluation- NLP tool)

Used: Node.js, JavaScript, HTML, npm, babel, Jest, REST API communication, Express.js, Webpack4, Aylien API<br>
**NOT AVAILABLE FOR LIVE PREVIEW DUE TO THE TRIAL ACCESS TO THE NLP API EXPIRATION**<br>
**Important: the API used in this project is a 14-day free trial version. After the period of 14 days the main functionality of the tool will expire and therefore not work properly.**



## About project:
**News Article Evaluation -NLP tool** created for **Front End Developer Nanodegree** program of **Udacity**.

The main focus put on:
* **Webpack 4** configurations for production and development modes and successful usage of both,
* Getting data from external API (**AYLIEN API**) from the server side,
* User Interface updates in according to the user input and based on that data fetched from the API (server side),
* **Jest** testing for client-side Javascript code,
* Working with **SASS**,
* **Service Workers** required in the project.

## Review evaluation:

The tool takes as an input the URL leading to a news article and the **Aylien API Sentiment Analysis** evaluates subjectivity, polarity and confidence rate for both of these.

More: [Aylien API Sentiment Analysis](https://docs.aylien.com/textapi/endpoints/#sentiment-analysis)

## Useful resources:

- [Aylien Documentation](https://docs.aylien.com/textapi/endpoints/#sentiment-analysis),
- Jest Documentation in general but in particular:
  * [Webpack](https://jestjs.io/docs/en/webpack),
  * [Testing Asynchronious Code](https://jestjs.io/docs/en/asynchronous),
- [Testing Fetch with Jest](https://codereviewvideos.com/course/react-redux-and-redux-saga-with-symfony-3/video/testing-javascript-s-fetch-with-jest-happy-path),
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for fetch testing,
- and numerous [StackOverflow](https://stackoverflow.com/) threads for many bugs and errors that needed to be solved on the way as well as the answers provided by mentors to other students on the **Udacity Knowledge** platform for Nanodegree students.

### Still to be improved/issues:

- [ ] Responsiveness. At the moment the tool is not mobile-screen-friendly.
- [ ] API used in this project will be replaced by another free NLP API for further learning purposes and to make the tool main functionality available.
- [ ] The live deployment is not up to date. Major changes were introduced and not pushed to the remote Heroku repository.
- [ ] Design.
