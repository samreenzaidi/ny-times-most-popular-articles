import React, { useEffect, useState } from 'react';
import Articles from './components/Articles';

const App = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);

    const getArticles = async () => {
        setLoading(true);
        fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ASenf7EvaARBFEZBCOeIShQ2QveaRKp2')
        .then((res) => {
          return res.json();
        })
        .then((res) => {
            setArticles(res?.results);
            setLoading(false);
        });
    };

    useEffect(() => {
        getArticles();
    }, []);

    return (
        <React.Fragment>
            <Articles loading={loading} articles={articles} />
        </React.Fragment >
    );
};

export default App;