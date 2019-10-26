import React, {Component} from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponents, axios) =>{
    return class extends Component{

        state = {
            error: null
        };

        constructor(props) {

            super(props);
            this.reqInterceptors = axios.interceptors.request.use(req => {
                this.setState({
                    error : null
                });
                return req;
            });

            this.resInsterceptors = axios.interceptors.response.use(res => res, error => {
                this.setState({
                    error : error
                })
            })
        }

        componentWillUnmount() {

            axios.interceptors.request.eject(this.reqInterceptors);
            axios.interceptors.response.eject(this.resInsterceptors);
        }

        errorConfirmedHandler = () => {
            this.setState({
               error: null
            });
        };

        render(){
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponents {...this.props}/>
                </Aux>
            )
        }
    }
};

export default withErrorHandler;
