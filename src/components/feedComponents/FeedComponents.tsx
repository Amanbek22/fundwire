import React, {useEffect, useRef, useState} from 'react';
import { FeedWrapper, FeedComponentWrapper, ActionWrapper, CreateNewWrapper, FeedModal } from './Feed-style';
import { Link } from 'react-router-dom';

const FeedHeader = () => {
    return (
        <FeedWrapper>
            <div>TITLE</div>
            <div>DATE</div>
            <div>TYPE</div>
            <div>STATUS</div>
            <div>ID</div>
            <div/>
        </FeedWrapper>
    );
};
export default FeedHeader;

export type FeedComponentProps = {
    title: string
    date: string
    type: string
    status: string
    id: string | number
    issueDate?: string
}
export const FeedComponent: React.FC<FeedComponentProps> = ({title,date,type,status, id}) => {
    const Status = status.toUpperCase()
    const Type = type.toUpperCase()
    const Time = new Date(date).toLocaleDateString()
    const [background, setBackground] = useState<string>('#a2a2a2')

    useEffect(()=> {
        switch (Status){
            case 'DRAFT':
                return setBackground('#a2a2a2')
            case 'ACTIVE':
                return setBackground('#51ef63')
            case 'PENDING':
                return setBackground('#ffe05d')
            case 'EXPIRED':
                return setBackground('#fd5d5d')
            default:
                setBackground('#a2a2a2')
        }
    }, [Status])
    return (
        <FeedComponentWrapper bg={background}>
            <Link to={`feed/create/${Type.toLowerCase()}/${id}`} className={'title'}>{title}</Link>
            <div>{Time}</div>
            <div>{Type}</div>
            <div className={'status'}><span>{Status}</span></div>
            <div>{id}</div>
            <div><Action/></div>
        </FeedComponentWrapper>
    )
}

export const Action = () => {
    const [opacity, setOpacity] = useState(0)
    const wrapperRef:any = useRef(null);
    useEffect(() => {
        function handleClickOutside(event:any) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                // alert("You clicked outside of me!");
                setOpacity(0)
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    return (
        <span ref={wrapperRef} className={'pos-relative'}>
            <ActionWrapper onClick={()=> setOpacity(1)}>
                <span/>
                <span/>
                <span/>
            </ActionWrapper>
            <FeedModal  opacity={opacity}>
                <div>EDIT</div>
                <div>ANALYTICS</div>
                <div>REPORT</div>
                <div className={'delete'}>DELETE</div>
            </FeedModal>
        </span>
    )
}

export const CreateNew = () => {
    return (
        <CreateNewWrapper>
            <span>CREATE NEW</span>
            <div className={'plus'}>
                +
                <div className={'modal'}>
                    <div><Link to={'/feed/create/video'}>video</Link></div>
                    <div><Link to={'/feed/create/event'}>event</Link></div>
                    <div><Link to={'/feed/create/article'}>article</Link></div>
                    <div><Link to={'/feed/create/podcast'}>podcast</Link></div>
                </div>
            </div>
        </CreateNewWrapper>
    )
}