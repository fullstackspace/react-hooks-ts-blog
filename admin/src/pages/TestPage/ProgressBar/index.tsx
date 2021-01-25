import React, { Component } from 'react';
import './index.scss'
import ProgressBar from '../../../components/ProgressBar/index';
import { Button, } from 'antd';
import createIcon from '@/components/CreateIcon/index';

class ResultPages extends Component {
  constructor(prop: any) {
    super(prop)
  }
  state = {
    step: 5,
    total: 12,
    showInfo: true,
    color: 'lightBlue'
  }
  increase = () => {
    let step = this.state.step + 1;
    if (step > this.state.total) {
      step = this.state.total;
    }
    this.setState({ step });
  };

  increaseTotal = () => {
    let total = this.state.total + 1;
    this.setState({ total });
  };

  decline = () => {
    let step = this.state.step - 1;
    if (step < 0) {
      step = 0;
    }
    this.setState({ step });
  };

  declineTotal = () => {
    let total = this.state.total - 1;
    console.log(total)
    if (total < this.state.step) {
      total = this.state.step;
    }
    if (total < 1) {
      alert("最少 total 为 1");
      total = 1;
    }
    this.setState({ total });
  };

  changeShowType = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  changeColor = () => {
    let randomColor = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    this.setState({
      color: randomColor
    });
  };

  render() {
    const { step, total, showInfo, color } = this.state
    return (
      <div>
        <h1>进度条</h1>
        <div>
          <p>
            <Button onClick={this.decline} icon={createIcon('MinusCircleOutlined' as any)} />
            <Button onClick={this.increase} icon={createIcon('PlusCircleOutlined' as any)} />
            <label>step:</label> {this.state.step}
          </p>
          <p>
            <Button onClick={this.declineTotal} icon={createIcon('MinusCircleOutlined' as any)} />
            <Button onClick={this.increaseTotal} icon={createIcon('PlusCircleOutlined' as any)} />
            <label>total:</label>
            {this.state.total}
          </p>
          <p>
            <Button onClick={this.changeShowType}>change</Button>
            <label>showInfo:</label>
            {this.state.showInfo ? "显示" : "不显示"}
          </p>
          <p>
            <Button onClick={this.changeColor}>change</Button>
            <label>color:</label>
            {this.state.color || "预设黄色"}
          </p>
        </div>
        <ProgressBar
          step={step}
          total={total}
          showInfo={showInfo}
          color={color} />
      </div>
    )
  }
}

export default ResultPages