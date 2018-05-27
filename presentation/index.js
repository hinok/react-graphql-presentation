/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  ComponentPlayground,
  Deck,
  Fill,
  Fit,
  Heading,
  Layout,
  ListItem,
  Image,
  Link,
  List,
  Quote,
  Slide,
  S,
  Text
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide/lib/';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import './style.css';
import SourceInfo from './SourceInfo';
import heading from 'spectacle/lib/components/heading';

const images = {
  toolsLogo: require('./../assets/images/tools-logo.png'),
  reactAirbnb: require('../assets/images/react-airbnb.png'),
  reactArte: require('../assets/images/react-arte.png'),
  reactFacebook: require('../assets/images/react-facebook.png'),
  reactImdb: require('../assets/images/react-imdb.png'),
  reactInstagram: require('../assets/images/react-instagram.png'),
  reactNetflix: require('../assets/images/react-netflix.png'),
  reactNyt: require('../assets/images/react-nyt.png'),
  reactTwitter: require('../assets/images/react-twitter.png'),
  reactUber: require('../assets/images/react-uber.png'),
  graphqlIntro: require('../assets/images/graphql-intro.png'),
  graphqlArchitecture: require('../assets/images/graphql-architecture.png'),
  howToStart: require('../assets/images/how-to-start.png'),
  storybook1: require('../assets/images/storybook-1.png'),
  storybook2: require('../assets/images/storybook-2.png'),
  storybook3: require('../assets/images/storybook-3.png'),
  jestConsole: require('../assets/images/jest-console.png'),
  jestConsole2: require('../assets/images/jest-console-2.png'),
  jestCodeCoverage: require('../assets/images/jest-code-coverage.png')
};

preloader(images);

const styles = {
  noLink: {
    textDecoration: 'none'
  },
  noIframe: {
    border: 0
  }
};

const colors = {
  primary: '#ffffff',
  secondary: '#424242',
  tertiary: '#78909C',
  quartenary: '#90A4AE',
  quinary: '#B0BEC5',
  senary: '#CFD8DC',
  funeral: '#182983'
};

const fonts = {
  primary: 'Montserrat',
  secondary: 'Helvetica'
};

const theme = createTheme(colors, fonts);

export default class Presentation extends Component {
  render() {
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} progress="number">
        <Slide transition={['fade']} bgColor="funeral">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            #dev #react #graphql
          </Heading>
          <Text margin="30px 0 0" textColor="#26C6DA" size={1} fit bold>
            What I use in day-to-day work<br />as a front-end developer who build react apps
          </Text>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why React.js?
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why GraphQL?
          </Heading>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactFacebook} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactInstagram} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactNetflix} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactAirbnb} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactTwitter} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactUber} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactNyt} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactImdb} />
        </Slide>
        <Slide transition={['fade']}>
          <Image width="100%" src={images.reactArte} />
        </Slide>

        <Slide>
          <iframe
            style={{ ...styles.noIframe }}
            width="100%"
            height="620px"
            src="http://graphql.org/users/"
          />
        </Slide>

        <Slide bgColor="#2AD9FE">
          <BlockQuote>
            <Quote>React - Gives us a language to declaratively describe user interfaces</Quote>
            <Link href="https://youtu.be/M4JqfZ-WaI0">
              <Cite textColor="funeral" style={{ opacity: 0.7 }}>Samer Buna<br /><small>@React Conf 2017<br />March 13-14 in Santa Clara, CA</small></Cite>
            </Link>
          </BlockQuote>
        </Slide>

        <Slide bgColor="funeral">
          <BlockQuote>
            <Quote>GraphQL - Gives us a language to declaratively describe data requirements</Quote>
            <Link href="https://youtu.be/M4JqfZ-WaI0">
              <Cite style={{ opacity: 0.7 }}>Samer Buna<br /><small>@React Conf 2017<br />March 13-14 in Santa Clara, CA</small></Cite>
            </Link>
          </BlockQuote>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>React.js</Heading>
          <List>
            <Appear><ListItem>Declarative</ListItem></Appear>
            <Appear><ListItem>Component based</ListItem></Appear>
            <Appear><ListItem>Learn once, write anywehere</ListItem></Appear>
            <Appear><ListItem>JSX - <strong>optional</strong>, XML-like syntax</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>React.js</Heading>
          <List>
            <Appear><ListItem>Composition</ListItem></Appear>
            <Appear><ListItem>Unidirectional data flow</ListItem></Appear>
            <Appear><ListItem>Immutable data structures</ListItem></Appear>
            <Appear><ListItem>Virtual DOM (everyone has it in 2017)</ListItem></Appear>
            <Appear><ListItem>Custom event system</ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/react.example')}
          ranges={[
            { loc: [0, 1], title: 'Pure component' },
            { loc: [0, 1], note: 'two props' },
            { loc: [1, 2], note: 'color (props)' },
            { loc: [2, 3], note: 'children (props)' },
            { loc: [6, 7], title: 'Class component' },
            { loc: [10, 13], note: 'initial state' },
            { loc: [18, 21], note: 'setState() is async' },
            { loc: [23, 24], note: 'render(), only based on state and props' },
            { loc: [24, 26], note: 'ES6 Destructuring assignment' },
            { loc: [30, 31], note: 'Attach event handler' },
            { loc: [38, 39], title: 'Lifecycle hooks' },
            { loc: [41, 44] },
            { loc: [45, 50] },
            { loc: [51, 53] },
            { loc: [54, 58] },
            { loc: [59, 62] },
            { loc: [70, 74], title: 'PropTypes' },
            { loc: [70, 74], note: 'propTypes are removed in production' },
            { loc: [75, 79], note: 'defaultProps are optional but very helpful' }
          ]}
        />

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Components</Heading>
          <List>
            <Appear>
              <ListItem>
                Presentational components<br />
                <small style={{ opacity: 0.6 }}>Other names: pure, stateless, functional, dumb, skinny</small>
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Container components<br />
                <small style={{ opacity: 0.6 }}>Other names: stateful, fat</small>
              </ListItem>
            </Appear>
          </List>
          <SourceInfo
            type="article"
            title="Presentational and Container Components"
            author="Dan Abramov"
            published="23 March 2015"
            lastAccess="2 April 2017"
            url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.6mlwxew0g"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Presentational components</Heading>
          <List>
            <Appear><ListItem>How things look</ListItem></Appear>
            <Appear><ListItem>Receives data and callbacks as props</ListItem></Appear>
          </List>
          <SourceInfo
            type="article"
            title="Presentational and Container Components"
            author="Dan Abramov"
            published="23 March 2015"
            lastAccess="2 April 2017"
            url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.6mlwxew0g"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Container components</Heading>
          <List>
            <Appear><ListItem>How things work</ListItem></Appear>
            <Appear><ListItem>Provides and manages data</ListItem></Appear>
          </List>
          <SourceInfo
            type="article"
            title="Presentational and Container Components"
            author="Dan Abramov"
            published="23 March 2015"
            lastAccess="2 April 2017"
            url="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.6mlwxew0g"
          />
        </Slide>

        <Slide>
          <BlockQuote>
            <Quote textColor="#26C6DA" textSize="42px">
              Don’t take the presentational and container component separation as a dogma.
              Sometimes it doesn’t matter or it’s hard to draw the line.
            </Quote>
            <Cite textColor="secondary">
              Dan Abramov<br />
              "<a style={{ color: 'inherit', ...styles.noLink }} href="https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0#.6mlwxew0g">
                Presentational and Container Components
              </a>",<br />
              23 march 2015
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 30px" textColor="secondary" caps>Virtual DOM</Heading>

          <List>
            <ListItem>An internal representation of the rendered UI</ListItem>
            <ListItem>It includes the React elements you return from your components</ListItem>
            <ListItem>A giant object made of objects that represents your DOM tree</ListItem>
          </List>

          <SourceInfo
            type="article"
            title="Optimizing Performance"
            author="Facebook"
            lastAccess="2 April 2017"
            url="https://facebook.github.io/react/docs/optimizing-performance.html#avoid-reconciliation"
          />
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>JSX</Heading>
          <List>
            <Appear><ListItem textSize={28}><span style={{ color: '#26C6DA' }}>NOT</span> HTML</ListItem></Appear>
            <Appear><ListItem textSize={28}>Require build step</ListItem></Appear>
            <Appear><ListItem textSize={28}>Syntactic sugar for calling <Code textSize={28}>React.createElement(...)</Code></ListItem></Appear>
            <Appear><ListItem textSize={28}>Embedding expressions <Code textSize={28}>&#123;1 + 2&#125;</Code></ListItem></Appear>
            <Appear><ListItem textSize={28}><Code textSize={28}>camelCase</Code> naming for all HTML attributes</ListItem></Appear>
            <Appear><ListItem textSize={28}><Code textSize={28}>class</Code> => <Code textSize={28}>className</Code>, <Code textSize={28}>for</Code> => <Code textSize={28}>htmlFor</Code></ListItem></Appear>
            <Appear><ListItem textSize={28}>Prevent <Code textSize={28}>XSS</Code></ListItem></Appear>
          </List>
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/jsx.example')}
          ranges={[
            { loc: [0, 1], title: 'JSX' },
            { loc: [2, 3], note: 'type' },
            { loc: [3, 4], note: 'props' },
            { loc: [4, 5], note: 'children' },
            { loc: [5, 6], note: '=> ReactElement' },
            { loc: [6, 7], note: 'Formal type definitions in Flow.js' },
            { loc: [8, 9], note: 'React Top-Level API' },
            { loc: [14, 19], note: 'Stateless Functional Component <=> Dumb Component <=> Pure Component' },
            { loc: [20, 23], note: 'Use pure component with JSX' },
            { loc: [26, 38], note: 'JSX is compiled to regular JavaScript' },
            { loc: [39, 44], note: 'JSX is compiled to regular JavaScript' }
          ]}
        />

        <Slide>
          <iframe
            style={{ ...styles.noIframe }}
            width="100%"
            height="620px"
            src="https://babeljs.io/repl/#?babili=false&evaluate=true&lineWrap=false&presets=es2015%2Creact%2Cstage-0&targets=&browsers=&builtIns=false&code=const%20Modal%20%3D%20(props)%20%3D%3E%20(%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3EModal%3C%2Fdiv%3E%0A%20%20%20%20%7Bprops.children%7D%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A%0Aconst%20App%20%3D%20(props)%20%3D%3E%20(%0A%20%20%3Cdiv%20className%3D%22app%22%3E%0A%20%20%20%20%3Ch1%3EApp%3C%2Fh1%3E%0A%20%20%20%20%7Bprops.children%7D%0A%20%20%3C%2Fdiv%3E%0A)%3B%0A%0Aexport%20default%20()%20%3D%3E%20(%0A%20%20%3CApp%3E%0A%20%20%20%20%3CModal%20title%3D%22Hello%20world%22%3E%0A%20%20%20%20%20%20Lorem%20ipsum%20dolor%20sit%20amet...%0A%20%20%20%20%3C%2FModal%3E%0A%20%20%3C%2FApp%3E%0A)%3B"
          />
          <div className="simplify-babel-repl-header" />
          <div className="simplify-babel-repl-bottom" />
        </Slide>

        <Slide>
          <ComponentPlayground
            theme="light"
            code={
              `
const App = () => (
  <h1>Hello world</h1>
);

render(<App />, mountNode);
              `
            }
          />
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary" caps>React.js 16.x (Fiber)</Heading>

          <List lineHeight={1.33}>
            <ListItem textSize="32px">Rewrite from scratch</ListItem>
            <ListItem textSize="32px">Error boundaries (if component crashes, app should be stable)</ListItem>
            <ListItem textSize="32px">Portals</ListItem>
            <ListItem textSize="32px">SSR 3x rendering faster</ListItem>
            <ListItem textSize="32px">Easy creating of custom renderers (react-dom, react-native etc.)</ListItem>
          </List>

          <SourceInfo
            type="article"
            title="A Cartoon Intro to Fiber - React Conf 2017"
            author="Lin Clark | Facebook"
            published="16 March 2017"
            lastAccess="24 March 2017"
            url="https://www.youtube.com/watch?v=ZCuYPiUIONs"
          />
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Beyond React 16 by Dan Abramov - JSConf Iceland</Heading>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/v6iR3Zk4oDY"
            frameBorder="0"
            allowFullScreen
          />
        </Slide>

        <Slide bgImage={images.graphqlIntro} />

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">GraphQL</Heading>
          <Text textColor="#E40098" fit caps>A query language for your API</Text>
        </Slide>

        <Slide bgImage={images.graphqlArchitecture} />

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">GraphQL</Heading>
          <List>
            <ListItem>Types and introspection</ListItem>
            <ListItem>Schema (a directory of the data types, your documentation)</ListItem>
            <ListItem>Query, Mutation, Subscription</ListItem>
            <ListItem><em>Graphi</em>QL</ListItem>
            <ListItem>No versioning</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Why GraphQL?</Heading>
          <List>
            <ListItem>Scalability</ListItem>
            <ListItem>Fetch only data you need</ListItem>
            <ListItem>Query, Mutation, Subscription - your new GET, POST, PUT, DELETE</ListItem>
            <ListItem><em>Graphi</em>QL</ListItem>
            <ListItem>No versioning, just add new fields</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Why GraphQL (@GitHub)? 1 / 5</Heading>

          <BlockQuote>
            <Quote textSize="36px" textColor="secondary"><span style={{ opacity: 0.5 }}>[...]</span> REST is not perfect and has some drawbacks. Our ambition to change our API focused on solving two problems. The first was scalability.</Quote>
            <Cite textColor="secondary" style={{ opacity: 0.7 }}>
              G. Torikian, B. Black, B. Swinnerton, C. Somerville, D. Celis, K. Daigle - The GitHub Engineering API Team<br />
              <a className="pretty-link" href="https://githubengineering.com/the-github-graphql-api/">
                <small><i className="material-icons">link</i> "The GitHub GraphQL API",</small><br />
                <small>14 September 2016</small>
              </a>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Why GraphQL? 2 / 5</Heading>

          <BlockQuote>
            <Quote textSize="36px" textColor="secondary"><span style={{ opacity: 0.5 }}>[...]</span> hypermedia navigation requires a client to repeatedly communicate with a server so that it can get all the information it needs.</Quote>
            <Cite textColor="secondary" style={{ opacity: 0.7 }}>
              G. Torikian, B. Black, B. Swinnerton, C. Somerville, D. Celis, K. Daigle - The GitHub Engineering API Team<br />
              <a className="pretty-link" href="https://githubengineering.com/the-github-graphql-api/">
                <small><i className="material-icons">link</i> "The GitHub GraphQL API",</small><br />
                <small>14 September 2016</small>
              </a>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Why GraphQL? 3 / 5</Heading>

          <BlockQuote>
            <Quote textSize="36px" textColor="secondary"><span style={{ opacity: 0.5 }}>[...]</span> sometimes required two or three separate calls to assemble a complete view of a resource.</Quote>
            <Cite textColor="secondary" style={{ opacity: 0.7 }}>
              G. Torikian, B. Black, B. Swinnerton, C. Somerville, D. Celis, K. Daigle - The GitHub Engineering API Team<br />
              <a className="pretty-link" href="https://githubengineering.com/the-github-graphql-api/">
                <small><i className="material-icons">link</i> "The GitHub GraphQL API",</small><br />
                <small>14 September 2016</small>
              </a>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Why GraphQL? 4 / 5</Heading>

          <BlockQuote>
            <Quote textSize="36px" textColor="secondary"><span style={{ opacity: 0.5 }}>[...]</span> our responses simultaneously sent too much data and didn’t include data that consumers needed.</Quote>
            <Cite textColor="secondary" style={{ opacity: 0.7 }}>
              G. Torikian, B. Black, B. Swinnerton, C. Somerville, D. Celis, K. Daigle - The GitHub Engineering API Team<br />
              <a className="pretty-link" href="https://githubengineering.com/the-github-graphql-api/">
                <small><i className="material-icons">link</i> "The GitHub GraphQL API",</small><br />
                <small>14 September 2016</small>
              </a>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Why GraphQL? 5 / 5</Heading>

          <BlockQuote>
            <Quote textSize="36px" textColor="secondary">
              We wanted <span style={{ opacity: 0.5 }}>[...]</span><br />
              - identify the OAuth scopes required for each endpoint<br />
              - be smarter about how our resources were paginated<br />
              - assurances of type-safety for user-supplied parameters<br />
              - to generate documentation from our code
            </Quote>
            <Cite textColor="secondary" style={{ opacity: 0.7 }}>
              G. Torikian, B. Black, B. Swinnerton, C. Somerville, D. Celis, K. Daigle - The GitHub Engineering API Team<br />
              <a className="pretty-link" href="https://githubengineering.com/the-github-graphql-api/">
                <small><i className="material-icons">link</i> "The GitHub GraphQL API",</small><br />
                <small>14 September 2016</small>
              </a>
            </Cite>
          </BlockQuote>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Query, Mutation, Subscriptions</Heading>
          <List>
            <ListItem>Query <small style={{ opacity: 0.7 }}>fetch data</small></ListItem>
            <ListItem>Mutations <small style={{ opacity: 0.7 }}>modify data</small></ListItem>
            <ListItem>Subscriptions <small style={{ opacity: 0.7 }}>real-time data</small></ListItem>
            <ListItem><a className="pretty-link" href="https://github.com/facebook/graphql/blob/master/rfcs/Subscriptions.md"><i className="material-icons">link</i> RFC: Working Draft - February 2017</a></ListItem>
          </List>

          <SourceInfo
            type="article"
            title="Subscriptions in GraphQL and Relay"
            author="Dan Schafer, Laney Kuenzel"
            published="16 October 2015"
            lastAccess="24 March 2017"
            url="http://graphql.org/blog/subscriptions-in-graphql-and-relay/"
          />
        </Slide>

        <CodeSlide
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/graphql-query.example')}
          ranges={[
            { loc: [0, 1], title: 'Query' },
            { loc: [1, 2], note: 'allFilms - using Root query' },
            { loc: [2, 9], note: 'Selecting fields' },
            { loc: [15, 17], note: 'Response' },
            { loc: [18, 23], note: 'It was a good movie' }
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/graphql-mutation.example')}
          ranges={[
            { loc: [0, 1], title: 'Mutation' },
            { loc: [0, 1], note: 'Required parameters' },
            { loc: [1, 2], note: 'Pass parameters, this is our payload' },
            { loc: [1, 2], note: 'createReview - using Root mutation' },
            { loc: [7, 15], note: 'Query variables, used as payload' },
            { loc: [16, 25], note: 'Response' }
          ]}
        />

        <CodeSlide
          transition={['fade']}
          lang="jsx"
          code={require('raw-loader!../assets/code/graphql-subscription.example')}
          ranges={[
            { loc: [0, 1], title: 'Subscription' },
            { loc: [0, 1], note: 'Required parameter' },
            { loc: [1, 2], note: 'Pass parameter' },
            { loc: [2, 4], note: 'Selecting fields' },
            { loc: [7, 16], note: 'Response' }
          ]}
        />

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary"><em>Graphi</em>QL</Heading>
          <Text caps fit textColor="#E40098" margin="0 0 30px">An in-browser IDE for exploring GraphQL</Text>
          <a className="pretty-link" href="https://github.com/graphql/graphiql">
            <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>code</i>
            <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>graphql/graphiql@github</span>
          </a>
        </Slide>

        <Slide>
          <iframe
            style={{ ...styles.noIframe }}
            width="100%"
            height="620px"
            src="https://graphql.org/swapi-graphql/?query=%7B%0A%20%20allFilms%20%7B%0A%20%20%20%20films%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20episodeID%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20releaseDate%0A%20%20%20%20%20%20director%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D"
          />
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="#E40098">GraphQL on the front-end</Heading>

          <List>
            <ListItem>
              <a className="pretty-link" href="https://facebook.github.io/relay/">
                <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
                <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>Relay (Facebook)</span>
              </a>
            </ListItem>
            <ListItem>
              <a className="pretty-link" href="http://dev.apollodata.com/">
                <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
                <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>Apollo Client</span>
              </a>
            </ListItem>
            <ListItem>
              <a className="pretty-link" href="https://github.com/kadirahq/lokka">
                <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
                <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>Lokka</span>
              </a>
            </ListItem>
            <ListItem>
              Use <Code>fetch()</Code> or <Code>XHR</Code>
            </ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="#E40098">GraphQL on the back-end</Heading>

          <List margin="0 0 30px">
            <ListItem>Language specific libraries</ListItem>
            <ListItem>Framework specific libraries</ListItem>
          </List>

          <a className="pretty-link" href="http://graphql.org/code/">
            <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
            <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>http://graphql.org/code/</span>
          </a>

          <a className="pretty-link" href="https://github.com/chentsulin/awesome-graphql">
            <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
            <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>https://github.com/chentsulin/awesome-graphql</span>
          </a>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary">Introduction for Ruby (RoR), Python (Django), Node.js</Heading>

          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/UBGzsb2UkeY"
            frameBorder="0"
            allowFullScreen
          />
        </Slide>

        <Slide transition={['zoom']} bgColor="#dce5e8" bgImage={images.toolsLogo} />

        <Slide bgImage={images.howToStart}>
          <a className="pretty-link" href="https://github.com/facebookincubator/create-react-app">
            <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
            <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>create-react-app@github</span>
          </a>
        </Slide>

        <Slide>
          <Text textColor="secondary"><S type="strikethrough">react-storybook</S></Text>
          <Heading textColor="#ed658d">Storybook</Heading>
          <a className="pretty-link" href="https://storybook.js.org/">
            <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
            <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>storybook.js.org</span>
          </a>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={6} textColor="secondary" caps>Build styleguide</Heading>
          <List>
            <Appear><ListItem>Can be used with React, Angular, Vue</ListItem></Appear>
            <Appear><ListItem>Webpack's configuration can be shared</ListItem></Appear>
            <Appear><ListItem>Develop components in isolation</ListItem></Appear>
            <Appear><ListItem>
              <a className="pretty-link" href="https://storybook.js.org/addons/introduction/">
                <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
                <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>Addons!</span>
              </a>
            </ListItem></Appear>
            <Appear><ListItem>Help in testing</ListItem></Appear>
          </List>
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Getting started
          </Heading>
          <CodePane textSize={24} lang="bash" source={`npm i -g @storybook/cli
cd my-react-app
getstorybook`}
          />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.storybook1} />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.storybook2} />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.storybook3} />
        </Slide>

        <Slide>
          <Heading size={1} fit lineHeight={1.15} textColor="secondary">
            Define story
          </Heading>
          <CodePane textSize={24} lang="javascript" source={`import React from 'react';
import { storiesOf } from '@storybook/react';
import Widget from './index';

storiesOf('components/Widget', module)
  .add('Widget', () => <Widget />);
`}
          />
        </Slide>

        <Slide transition={['fade']}>
          <Heading textColor="secondary">Testing</Heading>
          <Text textColor="secondary"><S type="strikethrough">is hard</S></Text>
          <List>
            <Appear><ListItem>Unit tests</ListItem></Appear>
            <Appear><ListItem>Integration tests</ListItem></Appear>
            <Appear><ListItem>Acceptance tests</ListItem></Appear>
            <Appear><ListItem>UI/Visual regression tests</ListItem></Appear>
          </List>
        </Slide>

        <Slide transition={['fade']}>
          <Heading textColor="secondary">Testing</Heading>
          <Text textColor="secondary"><S type="strikethrough">is hard</S></Text>
          <List>
            <ListItem><strong style={{ color: '#3ec6d8' }}>Unit tests</strong></ListItem>
            <ListItem><strong style={{ color: '#3ec6d8' }}>Integration tests</strong></ListItem>
            <ListItem>Acceptance tests</ListItem>
            <ListItem>UI/Visual regression tests</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading textColor="secondary">Tools?</Heading>
          <Text textColor="secondary">
            mocha, karma + jasmine, jest, testdouble, ava, tape, testdouble, and chai, should.js, sinon... there are too many of them
          </Text>
        </Slide>

        <Slide>
          <Heading textColor="secondary">Requirements</Heading>
          <List>
            <ListItem>Parallel tests</ListItem>
            <ListItem>Code coverage + reports</ListItem>
            <ListItem>Mocking (spy, stubs + mocking node modules)</ListItem>
            <ListItem>Solid documentation</ListItem>
            <ListItem>No configuration, it should just work</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading size={2} textColor="secondary">Welcome</Heading>
          <Heading size={1} textColor="#964451">jest</Heading>
          <Text size={3}>
            <a className="pretty-link" href="https://facebook.github.io/jest/">
              <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
              <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>facebook.github.io/jest/</span>
            </a>
          </Text>
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.jestConsole} />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.jestConsole2} />
        </Slide>

        <Slide>
          <iframe
            height="600px"
            width="100%"
            src="https://repl.it/@amasad/try-jest?lite=true"
            scrolling="no"
            frameBorder="no"
            allowTransparency="true"
            allowFullScreen="true"
            sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
          />
        </Slide>

        <Slide transition={['fade']}>
          <Image width="100%" src={images.jestCodeCoverage} />
        </Slide>

        <Slide>
          <Text textColor="secondary">Questions?</Text>
        </Slide>

        <Slide>
          <Heading caps fit textColor="funeral" margin="0 0 60px">Thanks!</Heading>
          <Text>
            Dawid Karabin
            <br />
            <a className="pretty-link" href="mailto:mail@hinok.net">
              <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>mail_outline</i>
              <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>mail@hinok.net</span>
            </a>
            <br/>
            <a className="pretty-link" href="https://twitter.com/hinoczek">
              @hinoczek
            </a>
          </Text>
        </Slide>

      </Deck>
    );
  }
}
