/**
 * 复制文字
 */
import * as React from 'react';
import Clipboard from 'clipboard';
export default class CopyText extends React.PureComponent<{copyText: string;}, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            copy: null
        };
    }
    componentDidMount() {
        const copy = new Clipboard('.copy-btn');
        copy.on('success', () => {
            window.$Toast.info('复制成功');
        });
        this.setState({
            copy
        });
    }
    componentWillUnmount() {
        this.state.copy.destroy();
    }
    render() {
        return (
            <button className="copy-btn" data-clipboard-text={this.props.copyText}>复制</button>
        );
    }
}