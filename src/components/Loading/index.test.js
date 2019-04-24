import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Loading from './';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter });

describe('Album', () => {
	it('Find method', () => {
		const wrapper = shallow(<Loading />);
		
		expect(wrapper.exists()).toBe(true);
		//expect(wrapper.find('h1').text).toEqual('sss');
	});
});
/*
class Loading extends Component {
	constructor() {
		super()
		this.state = {
			isLoading: true,
		}
	}
	//lifecycle method
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				isLoading: false
			})
		}, 3000)
	}
	render() {
		return (
			<Presentation
				data={this.state}
			/>
		);
	}
}
*/
