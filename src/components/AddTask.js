import addIcon from "../assets/icons/plus.svg";
import styled from "styled-components";

function AddTask(){
    return(
        <Wrapper>
            <Input type="text" name ='addtask' placeholder={"Add new task here .."}/>
            <AddBtn >
                <img className='act-btn' src={addIcon} alt="" />
            </AddBtn>
        </Wrapper>
    );
}


const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  margin: 25px auto 40px;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  background-color: inherit;
  border: none;
  border-bottom: 2px solid #333;
  width: 300px;
  font-size: 16px;
  letter-spacing: 0.05em;

  &::placeholder {
    color: #333;
  }
`;
const AddBtn = styled.button`
padding: 0;
  border: none;
  height: 27px;
  width: 27px;
  background-color: inherit;

  img {
    cursor: pointer;
  }
`;

export default AddTask;