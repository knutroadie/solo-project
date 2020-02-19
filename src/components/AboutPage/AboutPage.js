import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div>
      <Card>
      <CardContent>
      <h3>about us</h3>
      <p>Making quality connections to quality people is becoming 
        more difficult each day, especially in a place like the 
        Twin Cities, a place notorious for being difficult to break 
        into socially. GOOD DO GOOD provides users with reputable 
        volunteer opportunities where they can meet the kind of people 
        who might volunteer their time and resources for charity and 
        build their social safety net in substantial ways by taking 
        part in meaningful activities. Users with accounts can submit 
        new opportunities to be listed, but access will not be limited 
        to those with accounts.
        GOOD DO GOOD emphasises quality casual connections with 
        people who share your values.
      </p>
      </CardContent>
      </Card>
    </div>
  </div>
);

export default AboutPage;