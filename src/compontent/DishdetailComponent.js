

import { Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (!dish) {
        return <div></div>;
    }

    return (
        <div className='col-12 col-md-12 m-1'>
            <Card>
                <CardImg width='100%' src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

    function RenderComments({ comments }) {
        if (!comments || comments.length === 0) {
            return (
                <div>
                    <h4>Comments</h4>
                    <p>No comments available.</p>
                </div>
            );
        }
    
        const showComments = comments.map((cmnt) => (
            <li key={cmnt.id}>
                <p>{cmnt.comment}</p>
                <p>
                    --{cmnt.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit'
                    }).format(new Date(cmnt.date))}
                </p>
            </li>
        ));
    
        return (
            <div className='col-12 col-md-12 m-1'>
                <h4>Comments</h4>
                <ul className='list-unstyled'>
                    {showComments}
                </ul>
            </div>
        );
    }
    
const DishDetail = (props) => {
 if(props.dish != null)
 return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
        </div>
        <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.comments} />
        </div>
    </div>
    </div>
);
}
 
export default DishDetail;