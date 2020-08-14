// TO DO:
  // IF NO ARTICLES FOR RESTAURANT EXIST, DO NOT INCLUDE ARTICLES SECTION OF PAGE

  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = '';
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
      return (

        <section id='what-to-order'>
          <h3>WHAT TO ORDER</h3>
          <figure class='dish'>
            <img src='' alt=''>
            <figcaption>DISH NAME</figcaption>
          </figure>
          <figure class='dish'>
            <img src='' alt=''>
            <figcaption>DISH NAME</figcaption>
          </figure>
          <figure class='dish'>
            <img src='' alt=''>
            <figcaption>DISH NAME</figcaption>
          </figure>
        </section>

        <section id='insider-tip'>
          <h3>INSIDER TIP</h3>
          <hr>
          <p>RANDOM TEXT HERE</p>
          <hr>
        </section>

        <section id='known-for'>
          <figure class='feature'>
            <img src='' alt=''>
            <figcaption>FEATURE</figcaption>
          </figure>
          <figure class='feature'>
            <img src='' alt=''>
            <figcaption>FEATURE</figcaption>
          </figure>
          <figure class='feature'>
            <img src='' alt=''>
            <figcaption>FEATURE</figcaption>
          </figure>
        </section>

        <section id='articles'></section>
      );
    }
  }

  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );