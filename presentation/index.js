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
  Text
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide/lib/';
import preloader from 'spectacle/lib/utils/preloader';
import createTheme from 'spectacle/lib/themes/default';
import 'normalize.css';
import 'spectacle/lib/themes/default/index.css';
import './style.css';
import SourceInfo from './SourceInfo';

const images = {
  introFuneralbooker: require('./../assets/images/intro-funeralbooker.png'),
  toolsLogo: require('./../assets/images/tools-logo.png'),
  logo: require('../assets/images/funeralbooker-logo.svg'),
  iphone: require('../assets/images/iphone.svg'),
  reactAirbnb: require('../assets/images/react-airbnb.png'),
  reactArte: require('../assets/images/react-arte.png'),
  reactFacebook: require('../assets/images/react-facebook.png'),
  reactImdb: require('../assets/images/react-imdb.png'),
  reactInstagram: require('../assets/images/react-instagram.png'),
  reactNetflix: require('../assets/images/react-netflix.png'),
  reactNyt: require('../assets/images/react-nyt.png'),
  reactTwitter: require('../assets/images/react-twitter.png'),
  reactUber: require('../assets/images/react-uber.png'),
  reactiveIsDead1: require('../assets/images/reactive-is-dead-1.jpg'),
  reactiveIsDead2: require('../assets/images/reactive-is-dead-2.jpg'),
  reactiveIsDead3: require('../assets/images/reactive-is-dead-3.jpg'),
  reactiveIsDead4: require('../assets/images/reactive-is-dead-4.jpg'),
  stream: require('../assets/images/stream.png'),
  rx: require('../assets/images/rx.png'),
  rxOperators454: require('../assets/images/rx-operators-454.png'),
  rxOperators80: require('../assets/images/rx-operators-80.png'),
  babelLogo: require('../assets/images/babel-logo.png'),
  graphqlIntro: require('../assets/images/graphql-intro.png'),
  graphqlArchitecture: require('../assets/images/graphql-architecture.png'),
  fbArchitecture: require('../assets/images/fb-architecture.png'),
  howToStart: require('../assets/images/how-to-start.png')
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
            React.js + GraphQL
          </Heading>
          <Text margin="30px 0 0" textColor="#26C6DA" size={1} fit bold>
            Using React.js and GraphQL to build<br /> a data driven web applications
          </Text>
        </Slide>

        <Slide bgImage={images.reactiveIsDead1}>
          <Text padding="620px 0 0">&nbsp;</Text>
          <SourceInfo
            style={{
              top: 'inherit',
              bottom: 0
            }}
            type="article"
            title="Duality and the End of Reactive"
            author="Erik Meijer"
            published="19 May 2014"
            lastAccess="2 April 2017"
            light
            url="https://channel9.msdn.com/Events/Lang-NEXT/Lang-NEXT-2014/Keynote-Duality"
          />
        </Slide>

        <Slide bgImage={images.reactiveIsDead2}>
          <Text padding="620px 0 0">&nbsp;</Text>
          <SourceInfo
            style={{
              top: 'inherit',
              bottom: 0
            }}
            type="article"
            title="Duality and the End of Reactive"
            author="Erik Meijer"
            published="19 May 2014"
            lastAccess="2 April 2017"
            light
            url="https://channel9.msdn.com/Events/Lang-NEXT/Lang-NEXT-2014/Keynote-Duality"
          />
        </Slide>

        <Slide bgImage={images.reactiveIsDead3}>
          <Text padding="620px 0 0">&nbsp;</Text>
          <SourceInfo
            style={{
              top: 'inherit',
              bottom: 0
            }}
            type="article"
            title="Duality and the End of Reactive"
            author="Erik Meijer"
            published="19 May 2014"
            lastAccess="2 April 2017"
            light
            url="https://channel9.msdn.com/Events/Lang-NEXT/Lang-NEXT-2014/Keynote-Duality"
          />
        </Slide>

        <Slide bgImage={images.reactiveIsDead4}>
          <Text padding="620px 0 0">&nbsp;</Text>
          <SourceInfo
            style={{
              top: 'inherit',
              bottom: 0
            }}
            type="article"
            title="Duality and the End of Reactive"
            author="Erik Meijer"
            published="19 May 2014"
            lastAccess="2 April 2017"
            light
            url="https://channel9.msdn.com/Events/Lang-NEXT/Lang-NEXT-2014/Keynote-Duality"
          />
        </Slide>

        <Slide>
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Before we start
          </Heading>
          <Text margin="30px 0 0" textColor="#26C6DA" size={1} fit align="left" lineHeight={1.5}>
            What does <strong>reactive</strong> mean?<br />
            What does <strong>reactive systems</strong> mean?<br />
            What does <strong>(functional) reactive programming</strong> mean?<br />
            Is React.js reactive?
          </Text>
        </Slide>

        <Slide>
          <Text caps margin="0 0 30px" textColor="secondary" size={1}>
            reactive
          </Text>
          <Heading size={4} lineHeight={1} textColor="#26C6DA">
            done in response to a problem or situation
          </Heading>
          <SourceInfo
            type="article"
            title="reactive"
            author="Merriam-Webster"
            lastAccess="2 April 2017"
            url="https://www.merriam-webster.com/dictionary/reactive"
          />
        </Slide>

        <Slide>
          <Text caps margin="0 0 30px" textColor="secondary" size={1}>
            reactive systems 1/2
          </Text>
          <Heading margin="0" size={5} lineHeight={1.15} textColor="#26C6DA">
            Reactive systems [...] are continuously stimu­lated by the external environment, and their role is to continuously respond to these stimuli.
          </Heading>
          <SourceInfo
            type="article"
            title="Reactive Web Applications"
            author="Manuel Bernhardt"
            published="June 2016"
            lastAccess="2 April 2017"
            url="https://www.manning.com/books/reactive-web-applications"
          />
        </Slide>

        <Slide>
          <Text caps margin="0 0 30px" textColor="secondary" size={1}>
            reactive systems 2/2
          </Text>
          <List>
            <ListItem>continuously interact with their environment</ListItem>
            <ListItem>run at a speed that is dictated by the environment, not the program itself</ListItem>
            <ListItem>work in response to external demand</ListItem>
          </List>
          <SourceInfo
            type="article"
            title="Reactive Web Applications"
            author="Manuel Bernhardt"
            published="June 2016"
            lastAccess="2 April 2017"
            url="https://www.manning.com/books/reactive-web-applications"
          />
        </Slide>

        <Slide>
          <Text caps margin="0 0 30px" textColor="secondary" size={1}>
            reactive programming 1/3
          </Text>
          <Heading size={4} lineHeight={1.15} textColor="#26C6DA">
            [...] an asynchronous programming paradigm oriented around data streams and the propagation of change.
          </Heading>
          <SourceInfo
            type="article"
            title="Reactive programming"
            author="Wikipedia"
            lastAccess="2 April 2017"
            url="https://en.wikipedia.org/wiki/Reactive_programming"
          />
        </Slide>

        <Slide>
          <Text caps margin="0 0 30px" textColor="secondary" size={1}>
            reactive programming 2/3
          </Text>
          <Heading size={4} lineHeight={1.15} textColor="#26C6DA">
            Reactive programming is programming with asynchronous data streams
          </Heading>
          <SourceInfo
            type="article"
            title="The introduction to Reactive Programming you've been missing"
            author="André Staltz (http://staltz.com/)"
            published="2014"
            lastAccess="2 April 2017"
            url="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754"
          />
        </Slide>

        <Slide>
          <Text caps margin="0 0 30px" textColor="secondary" size={1}>
            reactive programming 3/3
          </Text>
          <Heading size={4} lineHeight={1.15} textColor="#26C6DA">
            A stream is a sequence of ongoing events ordered in time
          </Heading>
          <SourceInfo
            type="article"
            title="The introduction to Reactive Programming you've been missing"
            author="André Staltz (http://staltz.com/)"
            published="2014"
            lastAccess="2 April 2017"
            url="https://gist.github.com/staltz/868e7e9bc2a7b8c1f754"
          />
        </Slide>

        <Slide bgImage={images.stream} />

        <Slide>
          <Text caps fit margin="0 0 30px" textColor="secondary" size={1}>
            functional reactive programming (FRP) 1 / 2
          </Text>
          <Heading size={5} lineHeight={1.15} textColor="#26C6DA">
            [...] a programming paradigm for reactive programming using the building
            blocks of functional programming<br />(e.g. map, reduce, filter)
          </Heading>
          <SourceInfo
            type="article"
            title="Functional reactive programming"
            author="Wikipedia"
            lastAccess="2 April 2017"
            url="https://en.wikipedia.org/wiki/Functional_reactive_programming"
          />
        </Slide>

        <Slide>
          <Text caps fit margin="0 0 30px" textColor="secondary" size={1}>
            functional reactive programming (FRP) 2 / 2
          </Text>
          <List>
            <ListItem margin="0 0 30px">
              Datatypes of values over time
              <CodePane lang="javascript" textSize="24px">x = mouse.x; y = mouse.y</CodePane>
            </ListItem>
            <ListItem margin="0 0 30px">
              Derived expressions update automatically
              <CodePane lang="javascript" textSize="24px">a = area(x, y);</CodePane>
            </ListItem>
            <ListItem>
              Deterministic, fine-grained, and concurrent
            </ListItem>
          </List>
          <SourceInfo
            type="article"
            title="Reactive design: languages, and paradigms (Slide 58)"
            author="Dean Wampler"
            published="8 May 2014"
            lastAccess="2 April 2017"
            url="https://www.slideshare.net/deanwampler/reactive-design-languages-and-paradigms"
          />
        </Slide>

        <Slide bgImage={images.rx}>
          <Appear>
            <Text margin="0 0 500px" fit textColor="secondary" size={1}>
              The Reactive Extensions (Rx)
            </Text>
          </Appear>
        </Slide>

        <Slide>
          <Text margin="0 0 30px" textColor="secondary" size={1}>
            The Reactive Extensions (Rx) 1 / 3
          </Text>
          <Heading size={4} lineHeight={1.15} textColor="#26C6DA">
            Standarized API for (functional) reactive programming
          </Heading>
        </Slide>

        <Slide>
          <Text margin="0 0 30px" textColor="secondary" size={1}>
            The Reactive Extensions (Rx) 2 / 3
          </Text>
          <Text margin="0 0 30px" textColor="tertiary" size={2}>
            Any language you want...
          </Text>
          <Layout>
            <Fill style={{ paddingRight: '40px' }}>
              <Text textSize="28px" lineHeight={2}>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Java:</span> <span style={{ float: 'right' }}>RxJava</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>JavaScript:</span> <span style={{ float: 'right' }}>RxJS</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>C#:</span> <span style={{ float: 'right' }}>Rx.NET</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>C#(Unity):</span> <span style={{ float: 'right' }}>UniRx</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Scala:</span> <span style={{ float: 'right' }}>RxScala</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Clojure:</span> <span style={{ float: 'right' }}>RxClojure</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>C++:</span> <span style={{ float: 'right' }}>RxCpp</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Lua:</span> <span style={{ float: 'right' }}>RxLua</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Ruby:</span> <span style={{ float: 'right' }}>Rx.rb</span></div>
              </Text>
            </Fill>
            <Fill style={{ paddingLeft: '40px' }}>
              <Text textSize="28px" lineHeight={2}>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Python:</span> <span style={{ float: 'right' }}>RxPY</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Go:</span> <span style={{ float: 'right' }}>RxGo</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Groovy:</span> <span style={{ float: 'right' }}>RxGroovy</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>JRuby:</span> <span style={{ float: 'right' }}>RxJRuby</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Kotlin:</span> <span style={{ float: 'right' }}>RxKotlin</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Swift:</span> <span style={{ float: 'right' }}>RxSwift</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>PHP:</span> <span style={{ float: 'right' }}>RxPHP</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Elixir:</span> <span style={{ float: 'right' }}>reaxive</span></div>
                <div style={{ clear: 'both', overflow: 'hidden' }}><span style={{ float: 'left' }}>Dart:</span> <span style={{ float: 'right' }}>RxDart</span></div>
              </Text>
            </Fill>
          </Layout>
          <SourceInfo
            type="article"
            title="ReactiveX - Languages"
            author="ReactiveX"
            lastAccess="2 April 2017"
            url="http://reactivex.io/languages.html"
          />
        </Slide>

        <Slide>
          <Text margin="0 0 30px" textColor="secondary" size={1}>
            The Reactive Extensions (Rx) 3 / 3
          </Text>
          <Heading size={1} caps textColor="#26C6DA">Learn once, use everywhere</Heading>
        </Slide>

        <Slide>
          <iframe
            style={{ ...styles.noIframe }}
            width="100%"
            height="620px"
            src="http://rxmarbles.com/"
          />
        </Slide>

        <Slide>
          <Appear><Text textColor="#26C6DA">Write a program which will output number of clicks when number of clicks is >= 2</Text></Appear>
          <Appear><Text textColor="secondary" margin="30px 0 0">How many loc have to be written?</Text></Appear>
          <Appear><Heading margin="30px 0 0" textColor="#26C6DA">4 loc</Heading></Appear>
        </Slide>

        <Slide>
          <iframe
            style={{ ...styles.noIframe }}
            width="100%"
            height="620px"
            src="http://jsbin.com/dageza/edit?js,output"
          />
        </Slide>

        <Slide>
          <Appear><Text textSize="24px" lineHeight={1.33} textColor="#26C6DA">
            Write a program which will make an AJAX request to the Wikipedia API based on a text typed in the input field and display response results as a list.<br />
            Don't make a query when user is typing.<br />
            Don't make a query when user removes a character and adds it again.<br />
            Make a query only if a text is longer than 2 characters.<br/>
            When query fails, retry it with a delay.
          </Text></Appear>
          <Appear><Text textColor="secondary" margin="30px 0 0">How many loc have to be written?</Text></Appear>
          <Appear><Heading margin="30px 0 0" textColor="#26C6DA">~15 loc</Heading></Appear>
        </Slide>

        <Slide>
          <iframe
            style={{ ...styles.noIframe }}
            width="100%"
            height="620px"
            src="http://jsbin.com/johidiy/4/edit?js,output"
          />
        </Slide>

        <Slide bgImage={images.rxOperators454} />
        <Slide bgImage={images.rxOperators80} />

        <Slide>
          <Heading margin="0 0 30px" fit caps textColor="#26C6DA">Async in the wild</Heading>
          <List>
            <ListItem>Callbacks</ListItem>
            <ListItem>Promises</ListItem>
            <ListItem>RxJS</ListItem>
            <ListItem>Generators</ListItem>
            <ListItem>Coroutines</ListItem>
            <ListItem>Async / await</ListItem>
          </List>
        </Slide>

        <Slide>
          <Text margin="0 0 30px" textColor="secondary" size={1}>
            Reactive Manifesto
          </Text>
          <Appear>
            <Heading size={4} lineHeight={1.15} textColor="secondary">
              We want systems that are:
            </Heading>
          </Appear>
          <List textColor="#26C6DA">
            <Appear><ListItem>Responsive <small>(react to users, must respond)</small></ListItem></Appear>
            <Appear><ListItem>Resilient <small>(react to failure, can be recovered)</small></ListItem></Appear>
            <Appear><ListItem>Elastic <small>(react to load, loosely coupled, distributed)</small></ListItem></Appear>
            <Appear><ListItem>Message Driven <small>(react to events, async)</small></ListItem></Appear>
          </List>
          <Appear>
            <Heading size={4} lineHeight={1.15} textColor="secondary">
              We call these Reactive Systems
            </Heading>
          </Appear>
          <SourceInfo
            type="article"
            title="Reactive Manifesto"
            author="Jonas Bonér, Dave Farley, Roland Kuhn, and Martin Thompson"
            published="16 September 2014"
            lastAccess="2 April 2017"
            url="http://www.reactivemanifesto.org/"
          />
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={1} fit lineHeight={1} textColor="secondary">
            Is React reactive?
          </Heading>
          <Appear>
            <Heading margin="0 0 30px" size={1} caps lineHeight={1} textColor="#26C6DA">
              No
            </Heading>
          </Appear>
          <Appear>
            <Text>
              <Code>this.setState(...)</Code> is an imperative call
            </Text>
          </Appear>
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

        <Slide bgColor="#121212">
          <div style={{ position: 'relative', width: '375px', margin: '0 auto' }}>
            <Image width="375px" src={images.iphone} />
            <div style={{ position: 'absolute', top: '104px', left: '28px' }}>
              <iframe width="320px" height="565px" src="https://facebook.github.io/react/" style={{ ...styles.noIframe }} />
            </div>
          </div>
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
            { loc: [61, 62], title: 'PropTypes' },
            { loc: [61, 65], note: 'propTypes are removed in production' },
            { loc: [66, 70], note: 'defaultProps are optional but very helpful' }
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
          <Heading margin="0 0 30px" size={6} textColor="secondary" caps>
            <span style={{ color: '#26C6DA' }}>Elements</span>, Components, Instances
          </Heading>

          <Link textSize="32px" textColor="secondary" lineHeight={1.33} href="https://medium.com/@dan_abramov/react-components-elements-and-instances-90800811f8ca">
            A plain object describing a component instance or DOM node and its properties.
          </Link>

          <List>
            <ListItem>representation of your view</ListItem>
            <ListItem>description of what the DOM should look like</ListItem>
          </List>

          <Text textColor="secondary" textSize="32px">You tell React what you want to see on the screen.</Text>

          <SourceInfo
            type="article"
            title="Why did we build React?"
            author="Pete Hunt"
            published="5 June 2013"
            lastAccess="2 April 2017"
            url="https://facebook.github.io/react/blog/2013/06/05/why-react.html#reactive-updates-are-dead-simple."
          />
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary" caps>
            <span style={{ color: '#26C6DA' }}>Elements</span>, Components, Instances
          </Heading>
          <List>
            <ListItem>type <span style={{ opacity: 0.6 }}>(Button)</span></ListItem>
            <ListItem>props <span style={{ opacity: 0.6 }}>(color: red)</span></ListItem>
            <ListItem>children</ListItem>
          </List>
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary" caps>
            Elements, <span style={{ color: '#26C6DA' }}>Components</span>, Instances
          </Heading>

          <Text margin="0 0 30px" textColor="secondary">
            A class that extends <Code>React.Component</Code> and has <Code>render()</Code> method pure function
          </Text>

          <Text margin="0 0 30px" textColor="secondary">
            A pure function which returns an element
          </Text>

          <Text textColor="secondary">
            props (input) => component(props) => elements tree (output)
          </Text>

          <SourceInfo
            type="article"
            title="React Elements vs React Components"
            author="Tyler McGinnis"
            published="15 December 2016"
            lastAccess="20 March 2017"
            url="https://tylermcginnis.com/react-elements-vs-react-components/"
          />
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="secondary" caps>
            Elements, Components, <span style={{ color: '#26C6DA' }}>Instances</span>
          </Heading>

          <Text textColor="secondary">
            Created for components built with classes
          </Text>
        </Slide>

        <Slide>
          <Heading size={6} margin="0 0 30px" textColor="secondary" caps>Reconciliation</Heading>

          <Text color="secondary" lineHeight={1.33}>
            When data changes, the render method is called again. In order to perform updates as efficiently as possible, React diffs the return value from the previous call to render with the new one, and generate a minimal set of changes to be applied to the DOM.
          </Text>

          <SourceInfo
            type="article"
            title="Why did we build React?"
            author="Pete Hunt"
            published="5 June 2013"
            lastAccess="2 April 2017"
            url="https://facebook.github.io/react/blog/2013/06/05/why-react.html#reactive-updates-are-dead-simple."
          />
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

        <Slide bgImage={images.babelLogo}>
          <Appear>
            <Text margin="0 0 30px">
              Babel is a JavaScript compiler.
            </Text>
          </Appear>

          <Appear>
            <Text>
              ES2015 / ES2016 / ES2017 / stage-x / ... → ES5<br />
              <small style={{ opacity: 0.5 }}>(transpilation)</small>
            </Text>
          </Appear>
        </Slide>

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
          <Heading margin="0 0 30px" size={6} textColor="secondary" caps>React.js Fiber</Heading>

          <List lineHeight={1.33}>
            <ListItem textSize="32px">Rewrite from scratch</ListItem>
            <ListItem textSize="32px">Prioritized updates</ListItem>
            <ListItem textSize="32px">Error boundaries (if component crashes, app should be stable)</ListItem>
            <ListItem textSize="32px">Portals</ListItem>
            <ListItem textSize="32px">Easy creating of custom renderers (react-dom, react-native etc.)</ListItem>
            <ListItem textSize="32px"><a className="pretty-link" href="https://www.youtube.com/watch?v=QvbsR77-VJw"><i className="material-icons">ondemand_video</i> Fiber should be released with React 16.x</a></ListItem>
            <ListItem textSize="32px"><a className="pretty-link" href="http://isfiberreadyyet.com/"><i className="material-icons">link</i> http://isfiberreadyyet.com/</a></ListItem>
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
            src="https://graphql.org/swapi-graphql/?query=%7B%0A%20%20allFilms%20%7B%0A%20%20%20%20films%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20episodeID%0A%20%20%20%20%20%20title%0A%20%20%20%20%20%20releaseDate%0A%20%20%20%20%20%20director%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D&operationName=null"
          />
        </Slide>

        <Slide>
          <Heading margin="0 0 30px" size={6} textColor="#E40098">GraphQL on the front-end</Heading>

          <List>
            <ListItem>
              <a className="pretty-link" href="https://facebook.github.io/relay/">
                <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
                <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>Relay (Facebook), 2.x is coming</span>
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
            allowFullscreen
          />
        </Slide>

        <Slide transition={['zoom']} bgColor="#dce5e8" bgImage={images.introFuneralbooker} />

        <Slide transition={['zoom']} bgColor="#dce5e8" bgImage={images.toolsLogo} />

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={5} margin="0 0 30px" caps textColor="funeral">Front-end stack</Heading>
          <List>
            <Appear><ListItem>React.js</ListItem></Appear>
            <Appear><ListItem>redux</ListItem></Appear>
            <Appear><ListItem>redux-saga</ListItem></Appear>
            <Appear><ListItem>react-router</ListItem></Appear>
            <Appear><ListItem>ES2017, decorators, async-await (babel)</ListItem></Appear>
            <Appear><ListItem>webpack</ListItem></Appear>
            <Appear><ListItem>CSS Modules + Sass</ListItem></Appear>
            <Appear><ListItem>Apollo</ListItem></Appear>
            <Appear><ListItem>Jest + Enzyme</ListItem></Appear>
            <Appear><ListItem>TestCafe</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgImage={images.fbArchitecture} />

        <Slide>
          <Heading size={5} margin="0 0 30px" caps textColor="funeral">More?</Heading>
          <List>
            <Appear><ListItem>Server Side Rendering</ListItem></Appear>
            <Appear><ListItem>Build desktop apps</ListItem></Appear>
            <Appear><ListItem>Redux / MobX</ListItem></Appear>
            <Appear><ListItem>React Native</ListItem></Appear>
            <Appear><ListItem>React Hardware</ListItem></Appear>
            <Appear><ListItem>React Motion</ListItem></Appear>
            <Appear><ListItem>React Art</ListItem></Appear>
            <Appear><ListItem>React PDF</ListItem></Appear>
            <Appear><ListItem>Reason</ListItem></Appear>
            <Appear><ListItem>Elm</ListItem></Appear>
          </List>
        </Slide>

        <Slide bgImage={images.howToStart}>
          <a className="pretty-link" href="https://github.com/facebookincubator/create-react-app">
            <i className="material-icons" style={{ fontSize: '40px', verticalAlign: 'middle', marginRight: '8px' }}>link</i>
            <span style={{ verticalAlign: 'middle', display: 'inline-block' }}>create-react-app@github</span>
          </a>
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
