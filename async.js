const x = async () => {
    return 42;
};

console.log(x().then((value) => {
    console.log(value); // 42
}
));

const getX = async () => {
    const number = await x();
    console.log(number);
}

getX();

const newX = async (success = true) => {
    if (success) {
        return 42;
    } else {
        throw new Error('Error!');
    }
}
newX().then((value) => {
    console.log(value);
}
).catch((error) => {
    console.error(error); 
});

const getXX = async () => {
    try {
        const number = await newX(true);
        console.log(number); 
    } catch (error) {
        console.error(error); 
    }
}
getXX();


const fetching = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log("body: ",data['body']);
    console.log("title: ",data['title']); 
    console.log(data);

}
fetching();
