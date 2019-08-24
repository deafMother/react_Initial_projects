import React from 'react';
import ReactDom from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import DemoClass from './DemoClass'
import Time from './GenerateTime'

const App = () => {

    

    return (
        <div className="ui container comments" >
            <DemoClass/>
            <Time/>
            <ApprovalCard>
                <CommentDetail author="Keto" timeAgo='Today at 4:00pm' message='somme time' imgSrc={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Boom Man" timeAgo='Today at 10:00am' message='cloud fiere' imgSrc={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Another Dog" timeAgo='Today at 42:00pm' message='dept of madness' imgSrc={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Swimming Pain" timeAgo='Today at 19:00am' message='junclge of the moon' imgSrc={faker.image.avatar()} />
            </ApprovalCard>
            
        </div>
    );

}


ReactDom.render(
    <App />,
    document.querySelector('#root')
)