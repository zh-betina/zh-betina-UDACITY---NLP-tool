# UDACITY---NLP-evaluation-tool
(**Restaurant Review Evaluator - NLP tool**)

!Important: the API used in this project is a 14-day free trial version. After the period of 14 days the main functionality of the tool will expire and therefore not work properly.

### Available live deployment here: https://res-review-nlp.herokuapp.com/ (Still working on making Client library work for the deployment)


## About project:
**Restaurant Review Evaluator-NLP tool** created for **Front End Developer Nanodegree** program of **Udacity**.

The main focus put on:
* **Webpack 4** configurations for production and development modes and successful usage of both,
* Getting data from external API (**AYLIEN API**) from the server side,
* User Interface updates in according to the user input and based on that data fetched from the API (server side),
* **Jest** testing for client-side Javascript code,
* Working with **SASS**,
* **Service Workers** required in the project.

## Review evaluation:

The tool takes as an input the feedback of a restaurant customer and with the **Aylien API Aspect-Based Sentiment Analysis** evaluates the positive, negative and neutral aspects that were directly or indirectly mentioned.

More: [Aylien API Aspect-Based Sentiment Analysis](https://docs.aylien.com/textapi/endpoints/#aspect-based-sentiment-analysis)

## Useful resources:

- [Aylien Documentation](https://docs.aylien.com/textapi/endpoints/#aspect-based-sentiment-analysis),
- Jest Documentation in general but in particular:
  * [Webpack](https://jestjs.io/docs/en/webpack),
  * [Testing Asynchronious Code](https://jestjs.io/docs/en/asynchronous),
- [Testing Fetch with Jest](https://codereviewvideos.com/course/react-redux-and-redux-saga-with-symfony-3/video/testing-javascript-s-fetch-with-jest-happy-path),
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for fetch testing,
- and numerous [StackOverflow](https://stackoverflow.com/) threads for many bugs and errors that needed to be solved on the way as well as the answers provided by mentors to other students on the **Udacity Knowledge** platform for Nanodegree students.

### Still to be improved/issues:

- [ ] Responsiveness. At the moment the tool is not mobile-screen-friendly.
- [ ] API used in this project will be replaced by another free NLP API for further learning purposes and to make the tool main functionality available.
- [ ] Design.
