import {ComponentResource, ComponentResourceOptions, Input} from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

export interface ObjectStorageArgs {
    readonly name?: Input<string>
}

export class ObjectStorage extends ComponentResource {
    private args?: ObjectStorageArgs
    constructor(name: string, args?: ObjectStorageArgs, opts?: ComponentResourceOptions) {
      super('test:deployment:object', name, args, opts)
      new aws.s3.Bucket(name)
     }
}
