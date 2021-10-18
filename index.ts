import * as p from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export interface ObjectStorageArgs {
    readonly name?: p.Input<string>
}

export class ObjectStorage extends p.ComponentResource {
    private args?: ObjectStorageArgs
    constructor(name: string, args?: ObjectStorageArgs, opts?: p.ComponentResourceOptions) {
      super('test:deployment:object', name, args, opts)
      new aws.s3.Bucket(name)
     }
}

