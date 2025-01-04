import React from 'react';


export default class TimerTask extends React.Component {
    state = {
        seconds: 0,
        isRunning: false,
        completed: this.props.completed,
    };

    playTimer = () => {
        if (!this.state.isRunning) {
            this.setState({
                isRunning: true
            });
            const intervalId = setInterval(() => {
                this.setState(prevState => ({
                    seconds: prevState.seconds + 1,
                    isRunning: true
                }));
            }, 1000);
            this.intervalId = intervalId;
        }
    };

    stopTimer = () => {
        clearInterval(this.intervalId);
        this.setState({
            seconds: this.state.seconds, // Сохраняем текущие секунды
            isRunning: false,
            completed: true
        });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.task.completed === false && this.props.task.completed && this.state.isRunning) {
            this.stopTimer();
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { seconds, isRunning } = this.state;
        const formattedTimer = new Date(seconds * 1000).toISOString().substr(11, 8);

        return (
            <>
                <button className={`icon-play ${isRunning ? 'active' : ''}`} onClick={this.playTimer}></button>
                <span className="timer">{formattedTimer}</span>
                <button className={`icon-pause ${!isRunning ? 'active' : ''}`} onClick={this.stopTimer}></button>
            </>
        );
    }
}






























































