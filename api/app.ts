import express from "express";

const app = express();

const people: number[] = [10, 20];
export const toKwadrat = (x: number) => x * x;

app.use((req, res, next)=>{
    console.log(req.method, req.url);
    next();
});

app.use("/test", (req, res, next)=>{
    res.send(JSON.stringify({ success: Math.max(...people) }))
});

// app.use(express.static(path.join(__dirname, "public")));
// app.use(homeRoutes);
// app.use(styledRoutes);

app.use((req, res, next)=>{
    res.status(404).send("Page not found!");
});

if (process.env.NODE_ENV !== 'test') app.listen(3000);
