export const TrimHtml = (props) =>{
    return props.data.replace(/<(.|\n)*?>/g, '').split(" ").splice(0,40).join(" ")
}

