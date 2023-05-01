import { useEffect } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';


// 煩雑な処理になる可能性があるため、ここに実装ことにする

const client = new ApolloClient({
    uri: 'https://127.0.0.1/graphql',
    cache: new InMemoryCache(),
});



const graphQLClient = () => {

    useEffect(() => {
        client
            .query({
                query: gql`
					query AllPeople {
						Name
                        Age
					}
				`,
            })
            .then((result) => console.log(result));
    }, []);

}

export default graphQLClient;