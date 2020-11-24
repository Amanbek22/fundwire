import React, {useContext} from 'react';
import { SettingsPageWrapper } from './settings-page-style';
import SettingsBlock from "../../components/settings-block/SettingsBlock";
import question from '../../images/question.png'
import {Logout} from "../../firebase";
import {MyContext} from "../../App";
import {SIGN_IN_TYPE} from "../../state/RootReducer";

function SettingsPage() {
    const {dispatch} = useContext(MyContext)
    return (
        <SettingsPageWrapper>
            <h3>SETTINGS</h3>

            <div>
                <SettingsBlock>
                    <div><img src={question} alt="?"/> Me</div>
                    <div>John Doe</div>
                </SettingsBlock>
                <SettingsBlock>
                    <div><img src={question} alt="?"/> Notifications</div>
                    <div>All</div>
                </SettingsBlock>
                <SettingsBlock>
                    <div><img src={question} alt="?"/> Privacy</div>
                    <div>Only me</div>
                </SettingsBlock>
                <SettingsBlock>
                    <div onClick={()=>{
                        Logout().then(()=>{
                            localStorage.removeItem('userData')
                            dispatch({
                                type: SIGN_IN_TYPE,
                                data: null
                            })
                        })
                    }}><img src={question} alt="?"/> Login/Logout</div>
                    <div />
                </SettingsBlock>
            </div>
        </SettingsPageWrapper>
    );
}

export default SettingsPage;