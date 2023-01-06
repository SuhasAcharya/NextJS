import Header from "../components/Header";

export default {
    title:"Components/Header",
    component:Header,
    argTypes:{
        type:{
            options:["primary","secondary","error"],
            control:"radio"
        },
        size:{
            options:["sm","normal","lg"],
            control:"select"
        }
    }


}


const temp = (args) => <Header {...args} />

export const Primary = temp.bind({});
Primary.args = {
    type:"primary",
    size:"sm",
    children:"Primary"
}

export const Secondary = temp.bind({});
Secondary.args = {
    type:"secondary",
    size:"normal",
    children:"Secondary"
}

export const Error = temp.bind({});
Error.args = {
    type:"error",
    size:"lg",
    children:"Error"
}