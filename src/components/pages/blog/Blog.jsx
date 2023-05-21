import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="lg:my-10 text-black">
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl lg:text-3xl  mb-2 ">
            1. What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700"> Access Token: </strong>An access
            token is a credential issued by an authentication server after a
            user successfully logs in and authorizes access to their resources.
            It contains information about users and their permissions. Access
            tokens are short-lived and have an expiration time They are included
            in the request header when making API calls to access protected
            resources.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700"> Refresh token: </strong>A refresh
            token is issued along with the access token during the
            authentication process. It is used to obtain a new access token when
            the current one expires. Refresh tokens are generally long-lived
            with long maturities They are stored securely by the client and sent
            to the authentication server to request a new access token. This
            process helps maintain a seamless user experience by avoiding the
            need to re-authenticate each time an access token expires.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700"> Client-Side Storage: </strong>To
            ensure the security of client-side access and refresh tokens, it is
            important to follow certain guidelines. In web applications, tokens
            should be stored in HTTP-only cookies with the "secure" attribute,
            limiting access to secure HTTPS connections and protecting against
            cross-site scripting attacks. For mobile or desktop applications,
            tokens can be stored securely using platform-specific methods such
            as Keychain on iOS or KeyStore on Android. It is essential to avoid
            storing tokens in client-side storage options such as local storage
            or session storage, which can be vulnerable to cross-site scripting
            attacks. By adhering to these practices, tokens are protected from
            unauthorized access and misuse.
          </p>
        </article>
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl lg:text-3xl  mb-2 ">
            2. Compare SQL and NoSQL databases.
          </h1>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700 me-1">
              Structured Query Language:
            </strong>
            SQL is widely used for querying relational databases, where data is
            stored in rows and tables linked in various ways. A table record can
            link to one or many others, or many table records can relate to many
            records in another table. These relational databases, which offer
            fast data storage and retrieval, can handle large amounts of data
            and complex SQL queries
          </p>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700">NoSQL: </strong>NoSQL is a
            non-relational database, meaning it offers more flexibility to use a
            structure that stores data and uses a different structure than an
            SQL database. This does not mean that the systems do not use SQL, as
            NoSQL databases sometimes support some SQL commands. More
            specifically, "NoSQL" is sometimes defined as "not just SQL".
          </p>
        </article>
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl lg:text-3xl  mb-2 ">
            3. What is express js? What is Nest JS?
          </h1>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700"> ExpressJS</strong> is a Node.js
            web application framework that provides extensive functionality for
            building web and mobile applications. It is a layer built on top of
            Node that helps manage servers and routes. The ExpressJS development
            service framework provides several exceptional features that make
            web app development easy and fast. Express is a Node.js web
            application framework that provides extensive functionality for
            building web and mobile applications. It is a layer built on top of
            Node that helps manage servers and routes. The ExpressJS development
            service framework provides several exceptional features that make
            web app development easy and fast.
          </p>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700">NestJS </strong> is a Node.js
            framework for building server-side applications. It is based on
            TypeScript and JavaScript. This framework is inspired by Angular, so
            most of what is available in Angular is available in Nest, including
            providers, middleware, components and services. It's safe to say
            that Nest is easy for Angular developers to learn for any type of
            project. Nest uses the Express HTTP framework by default. However,
            Nest is platform agnostic, meaning it can work with any Node HTTP
            framework. For example, it can alternatively be configured to use
            Fastify, which can enhance the Node framework.
          </p>
        </article>
        <article className="mx-5 lg:mx-10 my-5">
          <h1 className="text-2xl lg:text-3xl  mb-2 ">
            4. What is MongoDB aggregate and how does it work?
          </h1>
          <p className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700">MongoDB Aggregate: </strong>
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline. One of the most common use cases of
            Aggregation is to calculate aggregate values for groups of
            documents. This is similar to the basic aggregation available in SQL
            with the GROUP BY clause and COUNT, SUM and AVG functions. MongoDB
            Aggregation goes further though and can also perform relational-like
            joins, reshape documents, create new and update existing
            collections, and so on.
          </p>
          <br />
          <div className="text-gray-700 text-base lg:text-lg mt-3 ms-8">
            <strong className="text-gray-700">How does it work: </strong>
            <ul className="list-disc list-inside	">
              <li>
                <strong className="text-gray-700">match stage </strong>- Filters
                the documents we need that match our requirements
              </li>
              <li>
                <strong className="text-gray-700">group stage </strong>-
                Performs aggregation
              </li>
              <li>
                <strong className="text-gray-700">sort stage </strong>- sort the
                result document as per our requirement Ascendant or Descendant
              </li>
            </ul>
            <br /> Input to the pipeline can be a single collection, others can
            be combined later down the pipeline. The pipeline then performs a
            series of transformations on the data until the goal is achieved. It
            can break down a complex query into simpler steps, each of which
            performs a different operation on the data. So, at the end of the
            query pipeline, what is requested is achieved. This method allows
            checking both input and output to check that the query is working
            correctly at each stage. The output of each stage will be the input
            of the next.
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
