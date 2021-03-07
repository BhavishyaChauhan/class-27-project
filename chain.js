class Chain{
    constructor(bodyA,bodyB){
        var options={
            length: 0,
            stiffness:0.04,
            bodyA: bodyA,
            bodyB: bodyB
        }
        this.chain2= Constraint.create(options)

        World.add(world,this.chain2)
    }
    display(){
        var pointa=this.chain2.bodyA.position
        var pointb=this.chain2.bodyB.position
        line(pointa.x,pointa.y,pointb.x,pointb.y)
    }
}