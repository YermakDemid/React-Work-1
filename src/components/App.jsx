import Cart from "./Cart/Cart";
import user from '../user.json';
import statsObj from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import Friend from "./Friend/Friend";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
const {username, tag, location, stats} = user;

export const App = () => {
  return (
    <main>
      <Section>
        <Cart
          name={username}
          tag={tag}
          location={location}
          followers={stats.followers}
          views={stats.views}
          likes={stats.likes}
        />
      </Section>
      <Section>
        <Statistics title={'Upload stats'} statsObj={statsObj} />
      </Section>
      <Section>
        <Friend friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </main>
    )
};
