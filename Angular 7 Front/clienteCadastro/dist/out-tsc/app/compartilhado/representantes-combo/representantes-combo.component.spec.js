import { async, TestBed } from '@angular/core/testing';
import { RepresentantesComboComponent } from './representantes-combo.component';
describe('RepresentantesComboComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [RepresentantesComboComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(RepresentantesComboComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=representantes-combo.component.spec.js.map