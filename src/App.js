import './App.css';
import React, { Component } from 'react';
import Statistics from './component/Statistics/Statistics ';
import FeedbackOptions from './component/Statistics/FeedbackOptions/FeedbackOptions';
import Section from './component/Section/Section ';
import Notification from './component/Notification/Notification';
import Container from './component/Container/Container';

class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
  addFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1
    }));
  };
  
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
  }
  
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
      return Math.round((good / this.countTotalFeedback()) * 100) || 0;
    }

  render() {
  const {good, neutral, bad} = this.state
    return (
      <Container>
      <Section title="Pleace leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.addFeedback}/>
        </Section>
      
        <Section title="Statistics">
          {this.countTotalFeedback() ? 
              ( <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback() }
                positive={this.countPositiveFeedbackPercentage()}
              />
              ) : (
              <Notification message="There is no feedback" />)
          }

        </Section>
      </Container>
    )
  }
}

export default App;
