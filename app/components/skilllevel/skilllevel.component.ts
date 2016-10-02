import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'skillLevel',
    templateUrl: '/app/components/skilllevel/skilllevel.component.html'
})
export class SkillLevelComponent implements OnInit {
    constructor() { }

    @Input() label: string;
    @Input() level: string;

    ngOnInit() { }
}