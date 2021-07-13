class launcher
{
	constructor(bod, anc)
	{
		var options={
			body: bod,
            point: anc,
            stiffness: 0.2,
            length: 5
			}
		this.body = bod
        this.point = anc
		this.launcher = Constraint.create(options);
		World.add(world, this.launcher);
	}
	display()
	{
			if (this.launcher.body) {
                var pa = this.body.position;
                var pb = this.point;
                strokeWeight(5)
                line(pa.x, pa.y, pb.x, pb.y)
            }
			
	}

    fly (){
        this.launcher.body = null;
    }

    attach(bod){
        this.launcher.body = bod

    }

}