import * as React from 'react';
import moment from 'moment';
import './index.less';

export default class Index extends React.PureComponent <any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            timer: null,
            days: '',
            timeStr: '',
            bgImg: `http://www.ruanyifeng.com/images_pub/pub_${Math.floor(Math.random() * (354) + 1)}.jpg`
        };
    }
    componentDidMount() {
        this.setState({
            timer: setInterval(it => {
                const ms = Number(new Date()) - Number(new Date('2018/08/16 19:50:00'));
                const days = (Math.floor(ms / 86400000)).toFixed(0);
                this.setState({
                    days,
                    timeStr: moment.utc(ms).format('HH时mm分ss秒')
                });
            }, 1000)
            // 4.10
        });
    }
    render() {
        return (
            <div
                style={{ backgroundImage: `url(${this.state.bgImg})` }}
                className="index-container"
            >
                <div className="text-content">
                    {/* <span>从2018年8月16日19:50起</span>
                    <br /> */}
                    <span>浪哥哥与之之妹儿</span>
                    <br />
                    <span>相识</span>
                    <br />
                    <span>
                        <span>第</span>
                        <span className="big-font">{this.state.days}</span>
                        <span>天</span>
                        <span>{`${this.state.timeStr}`}</span>
                    </span>
                </div>
            </div>
        );
    }
}