import { StyledTaskContainer } from '../style/components/task'
import lixo from '../assets/trash.svg'

export default function Task() {
    return (
        <StyledTaskContainer>
            <input type='checkbox'/>
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <button><img src={lixo}/></button>
        </StyledTaskContainer>
    )
}