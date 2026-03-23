class StatusController {
    get(req, res) {
        res.status(200).json({ 
            ok: true ,
            message: 'API is running', 
            status: 200 
        });
    }
}

const statusController = new StatusController();

export default statusController;